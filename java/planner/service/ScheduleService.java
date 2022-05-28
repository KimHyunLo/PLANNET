package planner.service;

import java.util.List;



import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import planner.model.dto.ScheduleDTO;
import planner.model.dao.ScheduleDAO;

@Service
public class ScheduleService {

	
	private ScheduleDAO dao;
	
	public List<ScheduleDTO> showSchedule() throws Exception {
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String uniquenumber = auth.getName();
		
		return dao.showSchedule(uniquenumber);
	}
	
	public void addSchedule(ScheduleDTO dto) throws Exception{


		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String uniquenumber = auth.getName();
		
		dto.setUniquenumber(uniquenumber);
		
		dao.addSchedule(dto);
	}
}