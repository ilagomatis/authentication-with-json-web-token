package com.hms.springbackendhms.db;

import com.hms.springbackendhms.user.Role;
import com.hms.springbackendhms.user.User;

import java.util.ArrayList;
import java.util.List;

public class VirtualDatabase {
    private static ArrayList<User> db = new ArrayList();
    public static void addUser(User user){
        db.add(user);
    }

    public static User findByEmail(String email){
        for(User user : db){
            if(user.getEmail().equals(email)){
                return user;
            }
        }
        return null;
    }

    public static boolean has(User user) {
        for(User registeredUser : db){
            if(registeredUser.getEmail().equals(user.getEmail())){
                return true;
            }
        }
        return false;
    }
}
