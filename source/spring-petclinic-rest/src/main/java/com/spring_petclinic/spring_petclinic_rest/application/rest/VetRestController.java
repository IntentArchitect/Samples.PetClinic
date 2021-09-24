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
            return new ResponseEntity<List<VetDTO>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/{vetId}")
    @ApiOperation(value = "getVet")
    public ResponseEntity<VetDTO> getVet(@PathVariable(value = "vetId") Integer vetId) {
        final VetDTO result = vetRestService.getVet(vetId);
        if (result == null) {
            return new ResponseEntity<VetDTO>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping
    @ApiOperation(value = "addVet")
    public ResponseEntity<Void> addVet(@RequestBody VetCreateDTO dto) {
        vetRestService.addVet(dto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{vetId}")
    @ApiOperation(value = "updateVet")
    public ResponseEntity<Void> updateVet(@PathVariable(value = "vetId") Integer vetId, @RequestBody VetUpdateDTO dto) {
        vetRestService.updateVet(vetId, dto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{vetId}")
    @ApiOperation(value = "deleteVet")
    public ResponseEntity<Void> deleteVet(@PathVariable(value = "vetId") Integer vetId) {
        vetRestService.deleteVet(vetId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}