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

    @GetMapping(path = "/{petId}")
    @ApiOperation(value = "getPet")
    public ResponseEntity<PetDTO> getPet(@PathVariable(value = "petId") int petId) {
        final PetDTO result = petRestService.getPet(petId);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    @ApiOperation(value = "addPet")
    public void addPet(@RequestBody PetCreateDTO dto) {
        petRestService.addPet(dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(path = "/{petId}")
    @ApiOperation(value = "updatePet")
    public void updatePet(@PathVariable(value = "petId") int petId, @RequestBody PetUpdateDTO dto) {
        petRestService.updatePet(petId, dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping(path = "/{petId}")
    @ApiOperation(value = "deletePet")
    public void deletePet(@PathVariable(value = "petId") int petId) {
        petRestService.deletePet(petId);
    }
}