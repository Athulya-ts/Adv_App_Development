package com.recharge.mobilerecharge.controller;

// import com.recharge.mobilerecharge.model.AddOn;
import com.recharge.mobilerecharge.model.Recharge;
// import com.recharge.mobilerecharge.service.AddOnService;
import com.recharge.mobilerecharge.service.RechargeService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

// import java.util.List;

@RestController
@RequestMapping("/api/recharges")
public class RechargeController {

    @Autowired
    private RechargeService rechargeService;

    @Tag(name="Delete a particular recharge plan", description="endpoint for deleting details of a particular recharge from admin side")
    @DeleteMapping("/api/customer/recharge/{planId}")
    public ResponseEntity<String> deleteRecharge(@PathVariable Long planId) {
        rechargeService.deleteRecharge(planId);
        return ResponseEntity.ok("Recharge plan deleted");
    }

    @Tag(name="Post recharge details", description="endpoint for posting details of a particular recharge from customer side")
    @PostMapping("/api/customer/recharge")
    public ResponseEntity<Recharge> saveRecharge(@RequestBody Recharge recharge) {
        Recharge savedRecharge = rechargeService.saveRecharge(recharge);
        return ResponseEntity.ok().body(savedRecharge);
    }
    
    @Tag(name="Edit recharge", description="endpoint for editing a particular recharge from user side")
    @PutMapping("/api/customer/recharge/{planId}")
    public ResponseEntity<String> editRecharge(@PathVariable Long planId, @RequestBody Recharge recharge) {
		rechargeService.updateDetails(planId,recharge);
        return ResponseEntity.ok("Recharge plan edited");
    }
    @Tag(name="View recharge", description="endpoint for viewing a particular recharge from user/admin side")
    @GetMapping("/api/customer/{userid}")
	public Optional<Recharge> fetchID(@PathVariable("userid") Long id)
	{
		return rechargeService.getDetailss(id);
	}

}

//------------------------------END--------------------------------------
// package com.recharge.mobilerecharge.controller;

// import com.recharge.mobilerecharge.model.Recharge;
// import com.recharge.mobilerecharge.service.RechargeService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/recharges")
// public class RechargeController {

//     @Autowired
//     private RechargeService rechargeService;

//     @GetMapping
//     public List<Recharge> getAllRecharges() {
//         return rechargeService.getAllRecharges();
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Recharge> getRechargeById(@PathVariable Long id) {
//         Recharge recharge = rechargeService.getRechargeById(id);
//         return ResponseEntity.ok().body(recharge);
//     }

//     @PostMapping
//     public ResponseEntity<Recharge> saveRecharge(@RequestBody Recharge recharge) {
//         Recharge savedRecharge = rechargeService.saveRecharge(recharge);
//         return ResponseEntity.ok().body(savedRecharge);
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteRecharge(@PathVariable Long id) {
//         rechargeService.deleteRecharge(id);
//         return ResponseEntity.noContent().build();
//     }
// }
