package com.wlindner;

import javax.persistence.*;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Data
@Entity
public class Thought {
	private @Id @GeneratedValue Long id;

	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "creation_time_utc")
	private Date creationTime;

	private String text;

	private String category;

	private Thought() {}

	public Thought(String text) {
		this.text = text;
	}
}
