package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetVisitDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitUpdateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.services.VisitRestService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitDTO;

@RestController
@RequestMapping("/api/visits")
@Api(value = "VisitRestController")
@AllArgsConstructor
public class VisitRestController {
    private final VisitRestService visitRestService;

    @GetMapping(path = "/{visitId}")
    @ApiOperation(value = "getVisit")
    public ResponseEntity<VisitDTO> getVisit(@PathVariable(value = "visitId") int visitId) {
        final VisitDTO result = visitRestService.getVisit(visitId);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    @ApiOperation(value = "addVisit")
    public void addVisit(@RequestBody VisitCreateDTO dto) {
        visitRestService.addVisit(dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(path = "/{visitId}")
    @ApiOperation(value = "updateVisit")
    public void updateVisit(@PathVariable(value = "visitId") int visitId, @RequestBody VisitUpdateDTO dto) {
        visitRestService.updateVisit(visitId, dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping(path = "/{visitId}")
    @ApiOperation(value = "deleteVisit")
    public void deleteVisit(@PathVariable(value = "visitId") int visitId) {
        visitRestService.deleteVisit(visitId);
    }
}