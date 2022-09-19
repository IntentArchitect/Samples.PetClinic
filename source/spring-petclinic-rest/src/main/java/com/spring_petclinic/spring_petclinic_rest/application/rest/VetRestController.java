package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetUpdateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.services.VetRestService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.List;

@RestController
@RequestMapping("/api/vets")
@Api(value = "VetRestController")
@AllArgsConstructor
public class VetRestController {
    private final VetRestService vetRestService;

    @GetMapping
    @ApiOperation(value = "getAllVets")
    public ResponseEntity<List<VetDTO>> getAllVets() {
        final List<VetDTO> result = vetRestService.getAllVets();
        if (result.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(path = "/{vetId}")
    @ApiOperation(value = "getVet")
    public ResponseEntity<VetDTO> getVet(@PathVariable(value = "vetId") int vetId) {
        final VetDTO result = vetRestService.getVet(vetId);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    @ApiOperation(value = "addVet")
    public void addVet(@RequestBody VetCreateDTO dto) {
        vetRestService.addVet(dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(path = "/{vetId}")
    @ApiOperation(value = "updateVet")
    public void updateVet(@PathVariable(value = "vetId") int vetId, @RequestBody VetUpdateDTO dto) {
        vetRestService.updateVet(vetId, dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping(path = "/{vetId}")
    @ApiOperation(value = "deleteVet")
    public void deleteVet(@PathVariable(value = "vetId") int vetId) {
        vetRestService.deleteVet(vetId);
    }
}