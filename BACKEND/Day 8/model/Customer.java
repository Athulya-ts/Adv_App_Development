package com.recharge.mobilerecharge.model;

// import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
// import jakarta.persistence.EnumType;
// import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.JoinTable;
// import jakarta.persistence.ManyToMany;
// import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Customer")

public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;

    @Column(length = 50,nullable = false)
    private String customerName;

    @Column(length = 100,nullable = false)
    private String customerAddress;

    // @Enumerated(EnumType.STRING)
    // private User user;

    // @ManyToMany
    // @JoinTable(
    //     name = "customer_addon",
    //     joinColumns = @JoinColumn(name = "customer_id"),
    //     inverseJoinColumns = @JoinColumn(name = "addon_id")
    // )
    // private List<AddOn> addons;
}