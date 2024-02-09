package com.recharge.mobilerecharge.service;

import com.recharge.mobilerecharge.model.AddOn;
import com.recharge.mobilerecharge.model.Recharge;

import java.util.List;
import java.util.Optional;
public interface RechargeService {

    Recharge saveRecharge(Recharge recharge);
    Recharge updateDetails(Long planId,Recharge e1);
    void deleteRecharge(Long id);
    // List<Recharge> getDetails();
    Optional<Recharge> getDetailss(Long id);
}

//--------------------------------------END-------------------------------
// package com.recharge.mobilerecharge.service;

// import com.recharge.mobilerecharge.model.Recharge;

// import java.util.List;

// public interface RechargeService {
//     List<Recharge> getAllRecharges();

//     Recharge getRechargeById(Long id);

//     Recharge saveRecharge(Recharge recharge);

//     void deleteRecharge(Long id);
// }
