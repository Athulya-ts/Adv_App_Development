package com.recharge.mobilerecharge.repository;

import com.recharge.mobilerecharge.model.Recharge;

// import org.springframework.data.domain.Sort.Order;
import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.util.Streamable;
import java.util.Optional;

public interface RechargeRepo extends JpaRepository<Recharge, Long> {
    Optional<Recharge> findById(Long id);
}
