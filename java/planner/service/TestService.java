package planner.service;

import java.util.List;

import planner.model.dto.MemberDTO;
import planner.model.dto.MemberLogin;

public interface TestService {
//	public List<MemberDTO> getAllDataList();
	
	//회원가입 기능
	public void createUser(MemberDTO dto);
	
//	public MemberDTO readMemberWithIDPW(String id, String password);
	
	//로그인 기능
	public MemberLogin loginUser(MemberLogin login) throws Exception;
}
