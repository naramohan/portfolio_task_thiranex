CREATE DATABASE developer_portfolio;

USE developer_portfolio;

CREATE TABLE project_details(
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(100),
    tech_stack VARCHAR(100),
    description TEXT
);

CREATE TABLE user_messages(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT
);

INSERT INTO project_details
(project_name,tech_stack,description)
VALUES
('Online Quiz System',
 'Java, MySQL',
 'Quiz application with score tracking'),

('Hospital Management',
 'HTML,CSS,JS',
 'Hospital record management project'),

('E-Commerce Website',
 'Node.js, MySQL',
 'Basic shopping website');
