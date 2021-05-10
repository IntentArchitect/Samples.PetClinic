package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetUpdateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.services.PetRestService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetDTO;

@RestController
@RequestMapping("/api/pets")
@Api(value = "PetRestController")
@AllArgsConstructor
public class PetRestController {
    private final PetRestService petRestService;

    @GetMapping("/{petId}")
    @ApiOperation(value = "getPet")
    public ResponseEntity<PetDTO> getPet(@PathVariable(value = "petId") int petId) {
        final PetDTO result = petRestService.getPet(petId);
        if (result == null) {
            return new ResponseEntity<PetDTO>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping
    @ApiOperation(value = "addPet")
    public ResponseEntity<Void> addPet(@RequestBody PetCreateDTO dto) {
        petRestService.addPet(dto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{petId}")
    @ApiOperation(value = "updatePet")
    public ResponseEntity<Void> updatePet(@PathVariable(value = "petId") int petId, @RequestBody PetUpdateDTO dto) {
        petRestService.updatePet(petId, dto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{petId}")
    @ApiOperation(value = "deletePet")
    public ResponseEntity<Void> deletePet(@PathVariable(value = "petId") int petId) {
        petRestService.deletePet(petId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}