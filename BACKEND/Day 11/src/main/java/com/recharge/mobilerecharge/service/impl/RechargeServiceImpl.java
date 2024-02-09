package com.recharge.mobilerecharge.service.impl;

import com.recharge.mobilerecharge.model.AddOn;
import com.recharge.mobilerecharge.model.Recharge;
import com.recharge.mobilerecharge.repository.RechargeRepo;
import com.recharge.mobilerecharge.service.RechargeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class RechargeServiceImpl implements RechargeService {
    @Autowired
    private RechargeRepo rechargeRepository;
    @Override
    public Recharge saveRecharge(Recharge recharge) {
        return rechargeRepository.save(recharge);
    }

    @Override
    public void deleteRecharge(Long planId) {
        rechargeRepository.deleteById(planId);
    }
    public Recharge updateDetails(Long planId,Recharge e1)
	{
		return rechargeRepository.saveAndFlush(e1);
	}
    // public List<Recharge> getDetails()
	// {
	// 	return rechargeRepository.findAll();
	// }
    @Override
    public Optional<Recharge> getDetailss(Long id) {
		return rechargeRepository.findById(id);
	}
}

//-------------------------------------------END-------------------------------
// package com.recharge.mobilerecharge.service.impl;

// import com.recharge.mobilerecharge.model.Recharge;
// import com.recharge.mobilerecharge.repository.RechargeRepo;
// import com.recharge.mobilerecharge.service.RechargeService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class RechargeServiceImpl implements RechargeService {
//     @Autowired
//     private RechargeRepo rechargeRepository;

//     @Override
//     public List<Recharge> getAllRecharges() {
//         return rechargeRepository.findAll();
//     }

//     @Override
//     public Recharge getRechargeById(Long id) {
//         return rechargeRepository.findById(id).orElse(null);
//     }

//     @Override
//     public Recharge saveRecharge(Recharge recharge) {
//         return rechargeRepository.save(recharge);
//     }

//     @Override
//     public void deleteRecharge(Long id) {
//         rechargeRepository.deleteById(id);
//     }
// }
