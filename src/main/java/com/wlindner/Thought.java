package com.wlindner;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Thought {
	private @Id @GeneratedValue Long id;

	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "creation_time_utc")
	private Date creationTime;

	@Lob
	private String text;

	private String category;

	private Thought() {}

	public Thought(String text) {
		this.text = text;
	}
}
