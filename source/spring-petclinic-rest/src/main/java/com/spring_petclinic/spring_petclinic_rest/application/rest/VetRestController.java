package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetUpdateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.services.VetRestService;
import java.util.List;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/api/vets")
@Tag(name = "VetRestController")
@AllArgsConstructor
public class VetRestController {
    private final VetRestService vetRestService;

    @GetMapping
    @Operation(summary = "getAllVets")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Returns the specified List<VetDTO>.") })
    public ResponseEntity<List<VetDTO>> getAllVets() {
        final List<VetDTO> result = vetRestService.getAllVets();
        if (result.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping(path = "/{vetId}")
    @Operation(summary = "getVet")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Returns the specified VetDTO."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred."),
        @ApiResponse(responseCode = "404", description = "Can\'t find an VetDTO with the parameters provided.") })
    public ResponseEntity<VetDTO> getVet(@Parameter(required = true) @PathVariable(value = "vetId") int vetId) {
        final VetDTO result = vetRestService.getVet(vetId);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    @Operation(summary = "addVet")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Successfully created."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void addVet(@Parameter(required = true) @RequestBody VetCreateDTO dto) {
        vetRestService.addVet(dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(path = "/{vetId}")
    @Operation(summary = "updateVet")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Successfully updated."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void updateVet(@Parameter(required = true) @PathVariable(value = "vetId") int vetId, @Parameter(required = true) @RequestBody VetUpdateDTO dto) {
        vetRestService.updateVet(vetId, dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping(path = "/{vetId}")
    @Operation(summary = "deleteVet")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully deleted."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void deleteVet(@Parameter(required = true) @PathVariable(value = "vetId") int vetId) {
        vetRestService.deleteVet(vetId);
    }
}