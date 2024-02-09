package com.recharge.mobilerecharge.mapper;

import com.recharge.mobilerecharge.dto.Customerdto;
import com.recharge.mobilerecharge.model.Customer;

public class CustomerMapper {

    public static Customerdto mapToCustomerdto(Customer customer) {
        return new Customerdto(
                customer.getCustomerId(),
                customer.getCustomerName(),
                customer.getCustomerAddress()
                // customer.getUser()
                );
    }

    public static Customer mapToCustomer(Customerdto customerdto) {
        return new Customer(
                customerdto.getCustomerId(),
                customerdto.getCustomerName(),
                customerdto.getCustomerAddress()
                // customerdto.getUser()
                );
}

}