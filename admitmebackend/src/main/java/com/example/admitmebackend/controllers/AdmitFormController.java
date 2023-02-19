package com.example.admitmebackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @CrossOrigin(origins = {"http://localhost:3000"})
    @GetMapping("/fetchRecords")
    public List<admitForm> findUser() {
        return admitFormRepository.findAll();
    }

    @CrossOrigin(origins = {"http://localhost:3000"})
    @PostMapping("/addRecords")
    public String addForm(@RequestBody admitForm admitForm) {
        System.out.println(admitForm);
        
        admitFormRepository.save(admitForm);
        return "Added User";
    }

    
}