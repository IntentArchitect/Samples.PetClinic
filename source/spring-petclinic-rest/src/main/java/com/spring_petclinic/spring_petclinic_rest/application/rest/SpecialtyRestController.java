package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring_petclinic.spring_petclinic_rest.application.models.SpecialtyDTO;
import com.spring_petclinic.spring_petclinic_rest.application.services.SpecialtyRestService;
import java.util.List;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/api/specialties")
@Tag(name = "SpecialtyRestController")
@AllArgsConstructor
public class SpecialtyRestController {
    private final SpecialtyRestService specialtyRestService;

    @GetMapping
    @Operation(summary = "getAllSpecialties")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Returns the specified List<SpecialtyDTO>.") })
    public ResponseEntity<List<SpecialtyDTO>> getAllSpecialties() {
        final List<SpecialtyDTO> result = specialtyRestService.getAllSpecialties();

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(path = "/{specialtyId}")
    @Operation(summary = "getSpecialty")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Returns the specified SpecialtyDTO."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred."),
        @ApiResponse(responseCode = "404", description = "Can\'t find an SpecialtyDTO with the parameters provided.") })
    public ResponseEntity<SpecialtyDTO> getSpecialty(@Parameter(required = true) @PathVariable(value = "specialtyId") int specialtyId) {
        final SpecialtyDTO result = specialtyRestService.getSpecialty(specialtyId);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping
    @Operation(summary = "addSpecialty")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Successfully created."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public ResponseEntity<Integer> addSpecialty(@Parameter(required = true) @RequestBody SpecialtyDTO dto) {
        final int result = specialtyRestService.addSpecialty(dto);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(path = "/{specialtyId}")
    @Operation(summary = "updateSpecialty")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Successfully updated."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void updateSpecialty(@Parameter(required = true) @PathVariable(value = "specialtyId") int specialtyId, @Parameter(required = true) @RequestBody SpecialtyDTO dto) {
        specialtyRestService.updateSpecialty(specialtyId, dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping(path = "/{specialtyId}")
    @Operation(summary = "deleteSpecialty")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully deleted."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void deleteSpecialty(@Parameter(required = true) @PathVariable(value = "specialtyId") int specialtyId) {
        specialtyRestService.deleteSpecialty(specialtyId);
    }
}