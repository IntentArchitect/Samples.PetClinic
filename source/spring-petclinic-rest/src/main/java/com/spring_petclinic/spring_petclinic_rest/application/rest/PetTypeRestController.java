package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetTypeDTO;
import com.spring_petclinic.spring_petclinic_rest.application.services.PetTypeRestService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.List;

@RestController
@RequestMapping("/api/pettypes")
@Api(value = "PetTypeRestController")
@AllArgsConstructor
public class PetTypeRestController {
    private final PetTypeRestService petTypeRestService;

    @GetMapping
    @ApiOperation(value = "getAllPetTypes")
    public ResponseEntity<List<PetTypeDTO>> getAllPetTypes() {
        final List<PetTypeDTO> result = petTypeRestService.getAllPetTypes();

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/{petTypeId}")
    @ApiOperation(value = "getPetType")
    public ResponseEntity<PetTypeDTO> getPetType(@PathVariable(value = "petTypeId") int petTypeId) {
        final PetTypeDTO result = petTypeRestService.getPetType(petTypeId);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping
    @ApiOperation(value = "addPetType")
    public ResponseEntity<Integer> addPetType(@RequestBody PetTypeDTO dto) {
        final int result = petTypeRestService.addPetType(dto);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping("/{petTypeId}")
    @ApiOperation(value = "updatePetType")
    public ResponseEntity<Void> updatePetType(@PathVariable(value = "petTypeId") int petTypeId, @RequestBody PetTypeDTO dto) {
        petTypeRestService.updatePetType(petTypeId, dto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{petTypeId}")
    @ApiOperation(value = "deletePetType")
    public ResponseEntity<Void> deletePetType(@PathVariable(value = "petTypeId") int petTypeId) {
        petTypeRestService.deletePetType(petTypeId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}