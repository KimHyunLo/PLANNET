package planner.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import planner.model.dao.TestMapper;
import planner.model.dto.MemberDTO;
import planner.model.dto.MemberLogin;

@Service
public class TestServiceImpl implements TestService {
	
	
	public TestServiceImpl(TestMapper testMapper) {
		this.testMapper = testMapper;
	}
	
	@Autowired
	    TestMapper testMapper;
	

//	public List<MemberDTO> getAllDataList() {
//		return testMapper.getAllDataList();
//	}
	//회원가입
	@Override
	public void createUser(MemberDTO dto) {
		testMapper.createUser(dto);
	}
	
	//로그인
	@Override
	public MemberLogin loginUser(MemberLogin login) throws Exception {
		return testMapper.loginUser(login);
	}
}
