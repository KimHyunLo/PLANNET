package planner.model.dto;

public class ScheduleDTO {
	private String uniquenumber;
	private String title;
	private String start_date;
	private String end_date;
	private String place;
	private String schedule_color;
	
	
	public String getUniquenumber() {
		return uniquenumber;
	}
	public void setUniquenumber(String uniquenumber) {
		this.uniquenumber = uniquenumber;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getStartDate() {
		return start_date;
	}
	public void setStartDate(String start_date) {
		this.start_date = start_date;
	}
	public String getEndDate() {
		return end_date;
	}
	public void setEnd_date(String end_date) {
		this.end_date = end_date;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public String getScheduleColor() {
		return schedule_color;
	}
	public void setScheduleColor(String schedule_color) {
		this.schedule_color = schedule_color;
	}
}
