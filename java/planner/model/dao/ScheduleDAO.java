package planner.model.dao;

import java.util.List;


import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import planner.model.dto.ScheduleDTO;

@Repository
public class ScheduleDAO {

	private SqlSession sqlSession;

	private static final String namespace = "com.management.schedule.ScheduleDAO";
	
	public List<ScheduleDTO> showSchedule(String uniquenumber) throws Exception {
		return sqlSession.selectList(namespace + ".showSchedule", uniquenumber);
	}
	
	public void addSchedule(ScheduleDTO dto) throws Exception  {
		sqlSession.insert(namespace + ".addSchedule", dto);
	}
}