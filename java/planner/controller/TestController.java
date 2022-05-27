package planner.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import planner.model.dto.MemberDTO;
import planner.model.dto.MemberLogin;
import planner.service.TestService;


@Controller
public class TestController {
	private final TestService testService;
	
	@Autowired
	public TestController(TestService testService) {
		this.testService = testService;
	}
	
	//회원가입 폼
	@RequestMapping(value = "/signup", method = RequestMethod.GET)
	public String signUp() {
		return "signup";
	}

	//회원가입 진행
	@RequestMapping(value = "/signUpAjax", method = RequestMethod.POST)
	public String signUpAjax(MemberDTO dto) {
		System.out.println(">> signUpAjax : " + dto.toString());
		testService.createUser(dto);
		return "login";
	}
	
	//로그인 폼
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String goLogin() {
		return "login";
	}
	
	//로그인 처리
	@RequestMapping(value = "/loginAjax", method = RequestMethod.POST)
	public String login(MemberLogin guest, HttpServletRequest req, RedirectAttributes rttr) throws Exception{
		
	System.out.println(">> loginAjax : " + guest.toString());
		
		HttpSession session = req.getSession();
		MemberLogin loginUser = testService.loginUser(guest);
		
		if (loginUser != null) {
			session.setAttribute("member", loginUser);
		}
		
		// F6: 1 라인 전진, F8: 다음 브레이크 포인트로 건너뛰기
		// F9: 메서드 안쪽으로 들어가기
			
		return "redirect:/";
	}
	
	//로그아웃 처리
	/*
	 * @RequestMapping(value = "/logoutAjax", method = RequestMethod.GET) public
	 * String logoutAjax(HttpSession session) throws Exception{
	 * session.invalidate(); return "redirect:/"; }
	 */



	
	
	
	
	
	
//	@RequestMapping(value = "/memberjoinpro.do", method = RequestMethod.POST)
//	public ModelAndView memberJoinPro(MemberDTO dto) {
//		ModelAndView mav = new ModelAndView();
//		testService.memberJoinProcess(dto);
//		mav.setViewName("memberloginform");
//		return mav;
//	}

	
//	@GetMapping("login")
//	public void getSelectOne() throws Exception{
//		
//	}
	

	
	
}
