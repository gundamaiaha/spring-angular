package com.spring.filejsonservice.controller;


import com.spring.filejsonservice.model.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Gundamaiah Annamaina
 * @created 04/10/20
 */
@RestController
@CrossOrigin
public class UserController {



    @RequestMapping(value = "/upload", method = RequestMethod.POST, consumes = { "multipart/form-data" })
    public User upload(@RequestPart("user") User user,
                       @RequestPart("file")  MultipartFile file) {
        System.out.println(user);
        System.out.println("Uploaded File: ");
        System.out.println("Name : " + file.getName());
        System.out.println("Type : " + file.getContentType());
        System.out.println("Name : " + file.getOriginalFilename());
        System.out.println("Size : " + file.getSize());
        user.setUserFileName(file.getOriginalFilename());
        return  user;
    }

}
