package com.example.backendadmitme.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

public class admitForm {
    @Id
    private String id;

    @Field
    private String aid;

    @Field
    private String name;

    @Field
    private String dob;

    @Field
    private String standard;

    @Field
    private String division;

    @Field
    private String gender;

    public admitForm() {
    }

    public admitForm(String id, String name, String dob, String standard, String division, String gender) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.standard = standard;
        this.division = gender;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAid() {
        return this.aid;
    }

    public void setAid(String aid) {
        this.aid = aid;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return this.dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getStandard() {
        return this.standard;
    }

    public void setStandard(String standard) {
        this.standard = standard;
    }

    public String getDivision() {
        return this.division;
    }

    public void setDivision(String division) {
        this.division = division;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String toString() {
        return String.format("User[id='%s' name='%s',dob='%s' standard='%s' division='%s' gender='%s']",
                id, name, dob, standard, division, gender);
    }
}
