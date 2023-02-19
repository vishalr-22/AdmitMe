package com.example.admitmebackend.controllers;

import java.util.ArrayList;
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
import java.util.Random;

@RestController
public class AdmitFormController {
    private final AdmitFormRepository admitFormRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    public AdmitFormController(AdmitFormRepository admitFormRepository) {
        this.admitFormRepository = admitFormRepository;

    }

    @CrossOrigin(origins = { "http://localhost:3000" })
    @GetMapping("/fetchRecords")
    public List<admitForm> findUser() {
        return admitFormRepository.findAll();
    }

    @CrossOrigin(origins = { "http://localhost:3000" })
    @PostMapping("/addRecords")
    public Boolean addForm(@RequestBody admitForm admitForm) {
        System.out.println(admitForm);
        System.out.println(admitFormRepository.getExistingRecords(admitForm.getName()).size());
        if (admitFormRepository.getExistingRecords(admitForm.getName()).size() == 0) {
            admitForm.setAid(generateRandom());
            admitFormRepository.save(admitForm);
            return true;
        }
        
        return false;
    }

    public String generateRandom() {
        Random r = new Random();
        List<Integer> codes = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            int x = r.nextInt(9999);
            while (codes.contains(x))
                x = r.nextInt(9999);
            codes.add(x);
        }
        String str = String.format("%04d", codes.get(0));
        String s = "A-"+ str; 
        return s;
    }

}