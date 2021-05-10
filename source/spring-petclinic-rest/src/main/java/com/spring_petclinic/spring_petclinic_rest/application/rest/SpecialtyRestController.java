package com.spring_petclinic.spring_petclinic_rest.application.rest;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring_petclinic.spring_petclinic_rest.application.models.SpecialtyDTO;
import com.spring_petclinic.spring_petclinic_rest.application.services.SpecialtyRestService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.List;

@RestController
@RequestMapping("/api/specialties")
@Api(value = "SpecialtyRestController")
@AllArgsConstructor
public class SpecialtyRestController {
    private final SpecialtyRestService specialtyRestService;

    @GetMapping
    @ApiOperation(value = "getAllSpecialties")
    public ResponseEntity<List<SpecialtyDTO>> getAllSpecialties() {
        final List<SpecialtyDTO> result = specialtyRestService.getAllSpecialties();
        if (result.isEmpty()) {
            return new ResponseEntity<List<SpecialtyDTO>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/{specialtyId}")
    @ApiOperation(value = "getSpecialty")
    public ResponseEntity<SpecialtyDTO> getSpecialty(@PathVariable(value = "specialtyId") int specialtyId) {
        final SpecialtyDTO result = specialtyRestService.getSpecialty(specialtyId);
        if (result == null) {
            return new ResponseEntity<SpecialtyDTO>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping
    @ApiOperation(value = "addSpecialty")
    public ResponseEntity<Integer> addSpecialty(@RequestBody SpecialtyDTO dto) {
        final int result = specialtyRestService.addSpecialty(dto);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping("/{specialtyId}")
    @ApiOperation(value = "updateSpecialty")
    public ResponseEntity<Void> updateSpecialty(@PathVariable(value = "specialtyId") int specialtyId, @RequestBody SpecialtyDTO dto) {
        specialtyRestService.updateSpecialty(specialtyId, dto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{specialtyId}")
    @ApiOperation(value = "deleteSpecialty")
    public ResponseEntity<Void> deleteSpecialty(@PathVariable(value = "specialtyId") int specialtyId) {
        specialtyRestService.deleteSpecialty(specialtyId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}