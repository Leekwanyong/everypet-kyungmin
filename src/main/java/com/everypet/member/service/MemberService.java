package com.everypet.member.service;

import com.everypet.member.data.domain.Member;

import java.util.List;

public interface MemberService {
    List<Member> selectMemberAll();

    Member selectMemberById(String member_id);
}
