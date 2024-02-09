package com.recharge.mobilerecharge.repository;

import com.recharge.mobilerecharge.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {

}
