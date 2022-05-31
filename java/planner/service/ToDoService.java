package planner.service;

import java.util.List;



import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import planner.model.dto.ToDoDTO;
import planner.model.dao.ToDoDAO;

@Service
public class ToDoService {

	
	private ToDoDAO dao;
	
	public List<ToDoDTO> showToDo() throws Exception {
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String uniquenumber = auth.getName();
		
		return dao.showToDo(uniquenumber);
	}
	
	public void addToDo(ToDoDTO dto) throws Exception{


		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String uniquenumber = auth.getName();
		
		dto.setUniquenumber(uniquenumber);
		
		dao.addToDo(dto);
	}
}