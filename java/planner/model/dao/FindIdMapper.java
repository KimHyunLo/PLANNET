package planner.model.dao;

import java.util.List;

import planner.model.dto.MemberDTO;

public interface FindIdMapper {
	public List<MemberDTO>findId(String email)throws Exception;
}
