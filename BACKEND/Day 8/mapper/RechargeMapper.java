// package com.recharge.mobilerecharge.mapper;

// import com.recharge.mobilerecharge.dto.Rechargedto;
// import com.recharge.mobilerecharge.model.Recharge;

// public class RechargeMapper {

//     public static Rechargedto mapToRechargeDto(Recharge recharge) {
//         return new Rechargedto(
//                 recharge.getRechargeId(),
//                 recharge.getRechargePrice(),
//                 recharge.getStatus(),
//                 recharge.getDate(),
//                 recharge.getPlan(),
//                 recharge.getAddOn());
//     }


//     public static Recharge mapToRecharge(Rechargedto rechargeDto) {
//         return new Recharge(
//             rechargeDto.getRechargeId(),
//             rechargeDto.getRechargePrice(),
//             rechargeDto.getStatus(),
//             rechargeDto.getDate(),
//             rechargeDto.getPlan(),
//             rechargeDto.getAddOn());
//     }

// }

package com.recharge.mobilerecharge.mapper;

import com.recharge.mobilerecharge.dto.Rechargedto;
import com.recharge.mobilerecharge.model.Recharge;

// import com.recharge.mobilerecharge.dto.Rechargedto;
// import com.recharge.mobilerecharge.model.Recharge;

// public class RechargeMapper {

//     public static Rechargedto mapToRechargeDto(Recharge recharge) {
//         Rechargedto rechargeDto = new Rechargedto();
//         rechargeDto.setRechargeId(recharge.getRechargeId());
//         rechargeDto.setRechargePrice(recharge.getRechargePrice());
//         rechargeDto.setStatus(recharge.getStatus());
//         rechargeDto.setDate(recharge.getDate());
//         // rechargeDto.setPlan(recharge.getPlan());
//         // rechargeDto.setAddOn(recharge.getAddOn());
//         return rechargeDto;
//     }

//     public static Recharge mapToRecharge(Rechargedto rechargeDto) {
//         Recharge recharge = new Recharge();
//         recharge.setRechargeId(rechargeDto.getRechargeId());
//         recharge.setRechargePrice(rechargeDto.getRechargePrice());
//         recharge.setStatus(rechargeDto.getStatus());
//         recharge.setDate(rechargeDto.getDate());
//         // recharge.setPlan(rechargeDto.getPlan());
//         // recharge.setAddOn(rechargeDto.getAddOn());
//         return recharge;
//     }

// }


public class RechargeMapper {

    public static Rechargedto rechargeToRechargeDTO(Recharge recharge) {
        return new Rechargedto(
                recharge.getRechargeId(),
                recharge.getRechargePrice(),
                recharge.getStatus(),
                recharge.getDate());
    }

    public static Recharge rechargeDTOToRecharge(Rechargedto rechargeDTO) {
        return new Recharge(
                rechargeDTO.getRechargeId(),
                rechargeDTO.getRechargePrice(),
                rechargeDTO.getStatus(),
                rechargeDTO.getDate());
    }

}
