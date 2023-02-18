package com.example.admitmebackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.admitmebackend.models.admitForm;
import com.example.admitmebackend.repositories.AdmitFormRepository;

@RestController
public class AdmitFormController {
    private final AdmitFormRepository admitFormRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    public AdmitFormController(AdmitFormRepository admitFormRepository) {
        this.admitFormRepository = admitFormRepository;

    }

    @CrossOrigin(origins = {"http://localhost:4200","http://10.0.0.108:4200"})
    @GetMapping("/fetchRecords")
    public List<admitForm> findUser() {
        return admitFormRepository.findAll();
    }

    @CrossOrigin(origins = {"http://localhost:4200","http://10.0.0.108:4200"})
    @GetMapping("/addRecords")
    public admitForm addForm(
            @RequestParam(required = true) String id,
            @RequestParam(required = true) String name,
            @RequestParam(required = true) String dob,
            @RequestParam(required = true) String standard,
            @RequestParam(required = true) String division,
            @RequestParam(required = true) String gender) {
        admitForm k = admitFormRepository
                .save(new admitForm(id, name, dob, standard, division, gender)));
        return k;
    }

    
}