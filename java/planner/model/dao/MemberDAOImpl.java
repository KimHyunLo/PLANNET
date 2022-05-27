package planner.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;

import planner.model.dto.MemberDTO;
import planner.model.dto.MemberLogin;

public class MemberDAOImpl implements TestMapper{
	private SqlSessionTemplate sqlSession;
	
	public MemberDAOImpl() {
		
	}
	@Autowired
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public void createUser(MemberDTO dto) {
		sqlSession.insert("createUser", dto);
	}
	@Override
	public MemberLogin loginUser(MemberLogin login) throws Exception {
		 return sqlSession.selectOne("loginUser", login);
	}
}
