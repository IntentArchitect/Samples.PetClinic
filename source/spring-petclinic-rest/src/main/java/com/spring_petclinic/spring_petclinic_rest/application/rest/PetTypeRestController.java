package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetTypeDTO;
import com.spring_petclinic.spring_petclinic_rest.application.services.PetTypeRestService;
import java.util.List;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/api/pettypes")
@Tag(name = "PetTypeRestController")
@AllArgsConstructor
public class PetTypeRestController {
    private final PetTypeRestService petTypeRestService;

    @GetMapping
    @Operation(summary = "getAllPetTypes")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Returns the specified List<PetTypeDTO>.") })
    public ResponseEntity<List<PetTypeDTO>> getAllPetTypes() {
        final List<PetTypeDTO> result = petTypeRestService.getAllPetTypes();

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(path = "/{petTypeId}")
    @Operation(summary = "getPetType")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Returns the specified PetTypeDTO."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred."),
        @ApiResponse(responseCode = "404", description = "Can\'t find an PetTypeDTO with the parameters provided.") })
    public ResponseEntity<PetTypeDTO> getPetType(@Parameter(required = true) @PathVariable(value = "petTypeId") int petTypeId) {
        final PetTypeDTO result = petTypeRestService.getPetType(petTypeId);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping
    @Operation(summary = "addPetType")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Successfully created."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public ResponseEntity<Integer> addPetType(@Parameter(required = true) @RequestBody PetTypeDTO dto) {
        final int result = petTypeRestService.addPetType(dto);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(path = "/{petTypeId}")
    @Operation(summary = "updatePetType")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Successfully updated."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void updatePetType(@Parameter(required = true) @PathVariable(value = "petTypeId") int petTypeId, @Parameter(required = true) @RequestBody PetTypeDTO dto) {
        petTypeRestService.updatePetType(petTypeId, dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping(path = "/{petTypeId}")
    @Operation(summary = "deletePetType")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully deleted."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void deletePetType(@Parameter(required = true) @PathVariable(value = "petTypeId") int petTypeId) {
        petTypeRestService.deletePetType(petTypeId);
    }
}