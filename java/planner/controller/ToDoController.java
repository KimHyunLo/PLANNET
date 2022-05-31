package planner.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import planner.model.dto.ToDoDTO;
import planner.service.ToDoService;

@Controller
public class ToDoController {

	private ToDoService service;
	
	//일정 관리 페이지
	@RequestMapping(value = "/todo")
	public String todo(Model model)throws Exception {
		
		model.addAttribute("showToDo" , service.showToDo());
		
		return "/main/todo";
	}
	
	//일정 추가 팝업
	@RequestMapping(value = "/todoPopup")
	public String test2() throws Exception {
		return "/main/todoPopup";
	}
	
	//일정 추가 버튼 클릭 Ajax
	@ResponseBody
	@RequestMapping(value = "/addToDo", method = RequestMethod.POST)
	public Map<Object,Object> addToDo(@RequestBody ToDoDTO dto) throws Exception{
		Map<Object,Object>map = new HashMap<Object,Object>();

		service.addToDo(dto);
	
		return map;
	}

	//일정 보이기 (임시)
	@ResponseBody
	@RequestMapping(value = "/showToDo")
	public List<ToDoDTO> showToDo() throws Exception {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String id = auth.getName();
		
		List<ToDoDTO> list = service.showToDo();
		
		return list;
	}
}
