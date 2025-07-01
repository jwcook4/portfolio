import React, { useState } from 'react';
import {
  Code,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const CybersecurityPortfolio = () => {
  // Track which projects are expanded
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const skillCategories = [
    {
      category: "Development",
      skills: [
        "React/Next.js",
        "TypeScript",
        "C#/.NET",
        "Vue.js",
        "Node.js",
        "SQL/MySQL",
        "REST APIs",
        "Git/GitHub",
        "Expo/React Native"
      ]
    },
    {
      category: "Business Intelligence & Analytics",
      skills: [
        "Tableau",
        "Data Analysis",
        "Splunk",
        "Business Process Optimization",
        "Requirements Gathering",
        "SIEM Tools",
        "Performance Reporting"
      ]
    },
    {
      category: "Security & Infrastructure",
      skills: [
        "Network Security",
        "Penetration Testing",
        "NIST Framework",
        "Linux/Windows/macOS",
        "VMware",
        "Wireshark",
        "Kali Linux"
      ]
    },
    {
      category: "Project Management & Leadership",
      skills: [
        "Agile Methodologies",
        "Technical Documentation",
        "Team Collaboration",
        "Stakeholder Communication",
        "Cost-Benefit Analysis",
        "Risk Assessment"
      ]
    }
  ];

  const projects = [
    {
      title: "Capstone Conferences Mobile App",
      description:
        "Led full-stack development of a cross-platform mobile application using React Native/Expo. Implemented REST APIs with Clerk authentication, built responsive scheduling interfaces, and integrated external university APIs. Achieved 200+ downloads with 40% user engagement.",
      appLink: "https://apps.apple.com/us/app/capstone-conferences/id6737815476",
      tags: ["React Native", "Expo", "REST APIs", "Clerk Auth", "Full-Stack"],
      award: "🚀 200+ Downloads"
    },
    {
      title: "Enterprise Security Analysis - Protective Life",
      description:
        "Conducted comprehensive security audits using SIEM tools (Zscaler, NSS, Splunk), improving log analysis efficiency by 25%. Through penetration testing with Kali Linux, discovered critical network segmentation vulnerabilities between guest and employee networks. Managed IAM tasks using Active Directory and Hyena for user provisioning, access audits, and permission analysis while handling ServiceNow security tickets. Participated in regular standups with DevOps, AppSec, and Security Architecture teams, gaining cross-functional exposure to enterprise security operations. Contributed to a $1.6M infrastructure modernization project by applying NIST framework assessments to justify the transition from wired to wireless infrastructure, enhancing both security posture and cost efficiency.",
      tags: ["SIEM", "Network Analysis", "IAM", "Cost Optimization", "Splunk"]
    },
    {
      title: "Quantum Cryptography Strategy",
      description:
        "Developed innovative quantum-resistant cryptographic solutions, earning 1st place and $2,000 prize at AIS x Walmart competition. Created implementation strategy for post-quantum security in enterprise environments.",
      competitionLink:
        "https://communities.aisnet.org/aisstudentchapters/eventshome/competitions/2025competitions/postquantumcomputingchallenge",
      tags: ["Cryptography", "Research", "Innovation", "Enterprise Security"],
      award: "🏆 1st Place - $2K Prize"
    },
    {
      title: "Business Intelligence Dashboard",
      description:
        "Created 10+ security and performance reports using Tableau, improving threat visibility by 20% and enabling data-driven decision making. Analyzed network traffic patterns and user behavior to identify optimization opportunities.",
      tags: ["Tableau", "Data Visualization", "Business Analytics", "Reporting"]
    }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f1eb',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        lineHeight: 1.6,
        color: '#333'
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: 'rgba(240, 233, 223, 0.95)',
          borderBottom: '1px solid #d4c4b0',
          padding: '24px 0'
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 24px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '16px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <Code style={{ color: '#2563eb', flexShrink: 0 }} size={32} />
              <div>
                <h1
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#111827',
                    margin: 0
                  }}
                >
                  John Wesley Cook
                </h1>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#6b7280',
                    margin: 0
                  }}
                >
                  Full-Stack Developer | Business Analyst | Cybersecurity Intern
                </p>
              </div>
            </div>

            <div
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '140px',
                height: '140px',
                backgroundColor: '#f3f4f6',
                border: '2px dashed #d1d5db',
                borderRadius: '12px',
                color: '#6b7280',
                fontSize: '12px',
                textAlign: 'center'
              }}
            >
              <img
                src="/profile-photo.jpg"
                alt="John Wesley Cook"
                onLoad={(e) => {
                  e.target.parentElement.style.backgroundColor = 'transparent';
                  e.target.parentElement.style.border = 'none';
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = 'Photo<br/>Not Found';
                }}
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center'
            }}
          >
            <a
              href="mailto:jwcook4@crimson.ua.edu"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s ease'
              }}
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="https://github.com/jwcook4"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s ease'
              }}
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/johnwesleycook"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s ease'
              }}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '48px 0' }}>
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 24px'
          }}
        >
          {/* About */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#111827',
                marginBottom: '24px',
                paddingBottom: '8px',
                borderBottom: '2px solid #d4c4b0'
              }}
            >
              About
            </h2>
            <div>
              <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: 1.7 }}>
                I’m currently pursuing a degree in Management Information
                Systems at The University of Alabama, specializing in Business
                Cyber Security, with plans to graduate in December 2025. I’m
                passionate about using technology to solve real-world business
                problems and strengthen cybersecurity postures.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  lineHeight: 1.7,
                  marginTop: '16px'
                }}
              >
                Recently, I developed a cross-platform app for the Association
                for Information Systems (AIS) using React.js, Prisma, and
                PostgreSQL. The project challenged me to build seamless
                front-end and back-end integrations while applying scalable,
                secure database solutions — sharpening my skills in full-stack
                development, UI/UX design, and modern database architecture.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  lineHeight: 1.7,
                  marginTop: '16px'
                }}
              >
                Beyond app development, I’ve built a strong foundation in
                programming with C#, SQL, and JavaScript (including frameworks
                like Vue.js and Angular). I’m also experienced with tools like
                Tableau, VMware, and Wireshark — having worked on full-stack
                web builds, SQL database optimization, and hands-on
                cybersecurity labs focused on identifying and mitigating network
                vulnerabilities.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  lineHeight: 1.7,
                  marginTop: '16px'
                }}
              >
                This summer, I’m continuing to grow as an Information Security
                Analyst Intern with Protective Life, where I’m applying what I’ve
                learned in real enterprise environments.
              </p>
            </div>
          </section>

          {/* Projects and Experience with dropdowns */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#111827',
                marginBottom: '24px',
                paddingBottom: '8px',
                borderBottom: '2px solid #d4c4b0'
              }}
            >
              Projects and Experience
            </h2>
            <div style={{ display: 'grid', gap: '32px' }}>
              {projects.map((project, index) => {
                const isOpen = expandedProjects[index];
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#f0e9df',
                      border: '1px solid #d4c4b0',
                      borderRadius: '12px',
                      padding: '24px',
                      transition: 'all 0.2s ease',
                      position: 'relative'
                    }}
                  >
                    <div
                      onClick={() => toggleProject(index)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer'
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '20px',
                          fontWeight: 600,
                          color: '#111827',
                          margin: 0
                        }}
                      >
                        {project.title}
                      </h3>
                      {isOpen ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </div>

                    {isOpen && (
                      <div style={{ marginTop: '16px' }}>
                        {project.award && (
                          <div
                            style={{
                              display: 'inline-block',
                              background:
                                'linear-gradient(135deg, #fbbf24, #f59e0b)',
                              color: '#000',
                              padding: '6px 12px',
                              borderRadius: '6px',
                              fontSize: '12px',
                              fontWeight: 600,
                              marginBottom: '16px'
                            }}
                          >
                            {project.award}
                          </div>
                        )}

                        <p
                          style={{
                            color: '#4b5563',
                            marginBottom: '16px',
                            lineHeight: 1.6
                          }}
                        >
                          {project.description}
                        </p>

                        {project.appLink && (
                          <p
                            style={{
                              color: '#4b5563',
                              marginBottom: '16px',
                              lineHeight: 1.6
                            }}
                          >
                            Download my app here:{' '}
                            <a
                              href={project.appLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: '#2563eb',
                                textDecoration: 'underline',
                                fontWeight: 500
                              }}
                            >
                              Capstone Conferences on App Store
                            </a>
                          </p>
                        )}

                        {project.competitionLink && (
                          <p
                            style={{
                              color: '#4b5563',
                              marginBottom: '16px',
                              lineHeight: 1.6
                            }}
                          >
                            Check out the competition here:{' '}
                            <a
                              href={project.competitionLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: '#2563eb',
                                textDecoration: 'underline',
                                fontWeight: 500
                              }}
                            >
                              Post-Quantum Computing Challenge
                            </a>
                          </p>
                        )}

                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px'
                          }}
                        >
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                backgroundColor: '#ede5d9',
                                color: '#374151',
                                padding: '4px 12px',
                                borderRadius: '6px',
                                fontSize: '12px',
                                fontWeight: 500,
                                border: '1px solid #d4c4b0'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Technical Skills */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#111827',
                marginBottom: '24px',
                paddingBottom: '8px',
                borderBottom: '2px solid #d4c4b0'
              }}
            >
              Technical Skills
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px'
              }}
            >
              {skillCategories.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#2563eb',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {skillGroup.category}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}
                  >
                    {skillGroup.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          color: '#111827',
                          fontSize: '14px',
                          padding: '2px 0',
                          fontWeight: 600
                        }}
                      >
                        {skill}
                        {idx < skillGroup.skills.length - 1 && (
                          <span
                            style={{
                              margin: '0 8px',
                              color: '#d4c4b0',
                              fontWeight: 400
                            }}
                          >
                            •
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Achievements */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#111827',
                marginBottom: '24px',
                paddingBottom: '8px',
                borderBottom: '2px solid #d4c4b0'
              }}
            >
              Key Achievements
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px'
              }}
            >
              <div
                style={{
                  backgroundColor: '#f0e9df',
                  border: '1px solid #d4c4b0',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}
              >
                <h3
                  style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#2563eb',
                    marginBottom: '8px'
                  }}
                >
                  $1.6M
                </h3>
                <p style={{ color: '#4b5563', fontSize: '14px' }}>
                  Cost savings through infrastructure optimization
                </p>
              </div>
              <div
                style={{
                  backgroundColor: '#f0e9df',
                  border: '1px solid #d4c4b0',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}
              >
                <h3
                  style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#2563eb',
                    marginBottom: '8px'
                  }}
                >
                  25%
                </h3>
                <p style={{ color: '#4b5563', fontSize: '14px' }}>
                  Improvement in system efficiency & threat detection
                </p>
              </div>
              <div
                style={{
                  backgroundColor: '#f0e9df',
                  border: '1px solid #d4c4b0',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}
              >
                <h3
                  style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#2563eb',
                    marginBottom: '8px'
                  }}
                >
                  200+
                </h3>
                <p style={{ color: '#4b5563', fontSize: '14px' }}>
                  App downloads with 40% active user engagement
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section
            style={{
              textAlign: 'center',
              backgroundColor: '#ede5d9',
              margin: '64px -24px 0',
              padding: '48px 24px',
              borderRadius: '16px'
            }}
          >
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#111827',
                marginBottom: '24px',
                paddingBottom: '8px',
                borderBottom: '2px solid #d4c4b0'
              }}
            >
              Get In Touch
            </h2>
            <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '32px' }}>
              I’m seeking opportunities in software development, business analysis,
              IT auditing, or cybersecurity. Let’s discuss how I can help drive
              innovation and efficiency in your organization.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <a
                href="mailto:jwcook4@crimson.ua.edu"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: '1px solid #2563eb'
                }}
              >
                <Mail size={18} />
                Send Email
              </a>
              <a
                href="/CookJohnResume.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#f0e9df',
                  color: '#374151',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: '1px solid #d4c4b0'
                }}
              >
                <ExternalLink size={18} />
                View Resume
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#ede5d9',
          borderTop: '1px solid #d4c4b0',
          padding: '24px 0',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 24px'
          }}
        >
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            &copy; 2025 John Wesley Cook. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CybersecurityPortfolio;
