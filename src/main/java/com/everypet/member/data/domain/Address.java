package com.everypet.member.data.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Address {

    private String memberId;    // 회원 아이디

    private String address;     // 주소

    private String receiver;    // 수령인

    private String phone;       // 수령인 전화번호

    private String request;     // 요청사항

    private char defaultYn;     // 기본 배송지 여부

}
