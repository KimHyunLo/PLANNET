package planner.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import planner.model.dto.MemberDTO;
import planner.model.dto.MemberLogin;


@Repository
@Mapper
public interface TestMapper {
//	List<MemberDTO>getAllDataList(); //조회
	
	
	//mapper를 호출하는 방식
	//유저정보를 db에 저장하기 위한 mapper인터페이스
	//회원가입 메소드
	public void createUser(MemberDTO dto);

	
	
	//로그인기능
	public MemberLogin loginUser(MemberLogin login) throws Exception;
}
