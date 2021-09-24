package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.spring_petclinic.spring_petclinic_rest.application.services.OwnerRestService;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerUpdateDTO;
import java.util.List;

@RestController
@RequestMapping("/api/owners")
@Api(value = "OwnerRestController")
@AllArgsConstructor
public class OwnerRestController {
    private final OwnerRestService ownerRestService;

    @GetMapping
    @ApiOperation(value = "getOwners")
    public ResponseEntity<List<OwnerDTO>> getOwners() {
        final List<OwnerDTO> result = ownerRestService.getOwners();
        if (result.isEmpty()) {
            return new ResponseEntity<List<OwnerDTO>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping
    @ApiOperation(value = "addOwner")
    public ResponseEntity<Void> addOwner(@RequestBody OwnerCreateDTO dto) {
        ownerRestService.addOwner(dto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{ownerId}")
    @ApiOperation(value = "getOwner")
    public ResponseEntity<OwnerDTO> getOwner(@PathVariable(value = "ownerId") Integer ownerId) {
        final OwnerDTO result = ownerRestService.getOwner(ownerId);
        if (result == null) {
            return new ResponseEntity<OwnerDTO>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping("/{ownerId}")
    @ApiOperation(value = "updateOwner")
    public ResponseEntity<Void> updateOwner(@PathVariable(value = "ownerId") Integer ownerId, @RequestBody OwnerUpdateDTO dto) {
        ownerRestService.updateOwner(ownerId, dto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{ownerId}")
    @ApiOperation(value = "deleteOwner")
    public ResponseEntity<Void> deleteOwner(@PathVariable(value = "ownerId") Integer ownerId) {
        ownerRestService.deleteOwner(ownerId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/*/lastname/{lastName}")
    @ApiOperation(value = "getOwnersList")
    public ResponseEntity<List<OwnerDTO>> getOwnersList(@PathVariable(value = "lastName") String lastName) {
        final List<OwnerDTO> result = ownerRestService.getOwnersList(lastName);
        if (result.isEmpty()) {
            return new ResponseEntity<List<OwnerDTO>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}