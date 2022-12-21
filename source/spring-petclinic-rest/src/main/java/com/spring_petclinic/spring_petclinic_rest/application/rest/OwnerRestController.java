package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring_petclinic.spring_petclinic_rest.application.services.OwnerRestService;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerUpdateDTO;
import java.util.List;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/api/owners")
@Tag(name = "OwnerRestController")
@AllArgsConstructor
public class OwnerRestController {
    private final OwnerRestService ownerRestService;

    @GetMapping
    @Operation(summary = "getOwners")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Returns the specified List<OwnerDTO>.") })
    public ResponseEntity<List<OwnerDTO>> getOwners() {
        final List<OwnerDTO> result = ownerRestService.getOwners();
        if (result.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    @Operation(summary = "addOwner")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Successfully created."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void addOwner(@Parameter(required = true) @RequestBody OwnerCreateDTO dto) {
        ownerRestService.addOwner(dto);
    }

    @GetMapping(path = "/{ownerId}")
    @Operation(summary = "getOwner")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Returns the specified OwnerDTO."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred."),
        @ApiResponse(responseCode = "404", description = "Can\'t find an OwnerDTO with the parameters provided.") })
    public ResponseEntity<OwnerDTO> getOwner(@Parameter(required = true) @PathVariable(value = "ownerId") int ownerId) {
        final OwnerDTO result = ownerRestService.getOwner(ownerId);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(path = "/{ownerId}")
    @Operation(summary = "updateOwner")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Successfully updated."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void updateOwner(@Parameter(required = true) @PathVariable(value = "ownerId") int ownerId, @Parameter(required = true) @RequestBody OwnerUpdateDTO dto) {
        ownerRestService.updateOwner(ownerId, dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping(path = "/{ownerId}")
    @Operation(summary = "deleteOwner")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully deleted."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void deleteOwner(@Parameter(required = true) @PathVariable(value = "ownerId") int ownerId) {
        ownerRestService.deleteOwner(ownerId);
    }

    @GetMapping(path = "/*/lastname/{lastName}")
    @Operation(summary = "getOwnersList")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Returns the specified List<OwnerDTO>."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public ResponseEntity<List<OwnerDTO>> getOwnersList(@Parameter(required = true) @PathVariable(value = "lastName") String lastName) {
        final List<OwnerDTO> result = ownerRestService.getOwnersList(lastName);
        if (result.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}