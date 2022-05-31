package planner.model.dao;

import java.util.List;


import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import planner.model.dto.ToDoDTO;

@Repository
public class ToDoDAO {

	private SqlSession sqlSession;

	private static final String namespace = "com.management.todo.ToDoDAO";
	
	public List<ToDoDTO> showToDo(String uniquenumber) throws Exception {
		return sqlSession.selectList(namespace + ".showToDo", uniquenumber);
	}
	
	public void addToDo(ToDoDTO dto) throws Exception  {
		sqlSession.insert(namespace + ".addToDo", dto);
	}
}