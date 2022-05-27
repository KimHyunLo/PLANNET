package planner.model.dto;

public class MemberDTO {
	private String uniquenumber;
	private String id;
	private String password;
	private String passwordcheck;
	private String name;
	private String email;
	private String phonenumber;
	
	public String getUniquenumber() {
		return uniquenumber;
	}
	public void setUniquenumber(String uniquenumber) {
		this.uniquenumber = uniquenumber;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPasswordcheck() {
		return passwordcheck;
	}
	public void setPasswordcheck(String passwordcheck) {
		this.passwordcheck = passwordcheck;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	@Override
	public String toString() {
		return "MemberDTO [uniquenumber=" + uniquenumber + ", id=" + id + ", password=" + password + ", passwordcheck="
				+ passwordcheck + ", name=" + name + ", email=" + email + ", phonenumber=" + phonenumber + "]";
	}
	
}
