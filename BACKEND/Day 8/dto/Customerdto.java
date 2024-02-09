package com.recharge.mobilerecharge.dto;

// import com.recharge.mobilerecharge.model.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customerdto 
{
    private Integer customerId;
    private String customerName;
    private String customerAddress;
    // private User user;
}