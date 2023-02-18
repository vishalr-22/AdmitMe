package com.example.admitmebackend.repositories;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.admitmebackend.models.admitForm;


public interface AdmitFormRepository extends MongoRepository<admitForm, String>{
    
}
