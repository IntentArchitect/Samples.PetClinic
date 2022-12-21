package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetVisitDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitUpdateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.services.VisitRestService;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/api/visits")
@Tag(name = "VisitRestController")
@AllArgsConstructor
public class VisitRestController {
    private final VisitRestService visitRestService;

    @GetMapping(path = "/{visitId}")
    @Operation(summary = "getVisit")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Returns the specified VisitDTO."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred."),
        @ApiResponse(responseCode = "404", description = "Can\'t find an VisitDTO with the parameters provided.") })
    public ResponseEntity<VisitDTO> getVisit(@Parameter(required = true) @PathVariable(value = "visitId") int visitId) {
        final VisitDTO result = visitRestService.getVisit(visitId);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    @Operation(summary = "addVisit")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Successfully created."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void addVisit(@Parameter(required = true) @RequestBody VisitCreateDTO dto) {
        visitRestService.addVisit(dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(path = "/{visitId}")
    @Operation(summary = "updateVisit")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Successfully updated."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void updateVisit(@Parameter(required = true) @PathVariable(value = "visitId") int visitId, @Parameter(required = true) @RequestBody VisitUpdateDTO dto) {
        visitRestService.updateVisit(visitId, dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping(path = "/{visitId}")
    @Operation(summary = "deleteVisit")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Successfully deleted."),
        @ApiResponse(responseCode = "400", description = "One or more validation errors have occurred.") })
    public void deleteVisit(@Parameter(required = true) @PathVariable(value = "visitId") int visitId) {
        visitRestService.deleteVisit(visitId);
    }
}