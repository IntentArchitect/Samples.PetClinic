package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetUpdateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.services.PetRestService;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/pets")
@Tag(name = "PetRestController")
@AllArgsConstructor
public class PetRestController {
    private final PetRestService petRestService;

    @GetMapping(path = "/{petId}")
    @Operation(summary = "getPet")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Returns the specified PetDTO."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred."),
        @ApiResponse(responseCode = "404", description = "Can\'t find an PetDTO with the parameters provided.") })
    public ResponseEntity<PetDTO> getPet(@PathVariable(value = "petId") int petId) {
        final PetDTO result = petRestService.getPet(petId);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    @Operation(summary = "addPet")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Successfully created."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void addPet(@RequestBody PetCreateDTO dto) {
        petRestService.addPet(dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(path = "/{petId}")
    @Operation(summary = "updatePet")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Successfully updated."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void updatePet(@PathVariable(value = "petId") int petId, @RequestBody PetUpdateDTO dto) {
        petRestService.updatePet(petId, dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping(path = "/{petId}")
    @Operation(summary = "deletePet")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully deleted."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void deletePet(@PathVariable(value = "petId") int petId) {
        petRestService.deletePet(petId);
    }
}