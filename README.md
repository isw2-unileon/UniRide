# UniRide – University Shared Mobility Platform

## 1. Project Overview

UniRide is a university-focused ride-sharing web platform designed to facilitate short-distance trips to and from campus.

The platform connects students from the same university who wish to share specific rides on specific dates and times, allowing them to coordinate transportation and split costs in a simple and structured way.

Each ride is treated as an independent trip instance. Users do not subscribe to drivers or book recurring services; instead, they request seats for individual trips.

UniRide is not a general ride-hailing platform, but a closed, academic-community-based mobility solution.

---

## 2. Problem Statement

Many university students commute daily using private vehicles with low occupancy rates. This leads to:

- Increased transportation costs  
- Traffic congestion near campus  
- Higher environmental impact  
- Lack of coordination among students living nearby  

Existing solutions are either:

- General ride-hailing platforms
- Long-distance carpooling services
- Informal messaging groups with poor organization

There is currently no structured, university-specific system focused on organizing individual short-distance academic trips within a closed community.

---

## 3. Proposed Solution

UniRide provides:

- A closed university-based community  
- Structured publication of specific trips (date, time, origin, destination, seats available)  
- Seat request and approval workflow for each trip  
- Transparent cost-sharing model (non-profit)  
- Trip history and accountability  

Each trip is independent and must be explicitly created by a driver. Passengers request seats for that specific trip only. There is no subscription model, automatic recurring booking, or long-term driver-passenger binding.

The system prioritizes simplicity, transparency, and structured coordination rather than on-demand ride services.

---

## 4. Differentiation

UniRide differs from large-scale ride-sharing platforms in the following ways:

| Aspect | General Platforms | UniRide |
|--------|-------------------|----------|
| Scope | Public, city-wide | University-only |
| Distance | Any distance | Short academic commutes |
| Business Model | Profit-based | Cost-sharing only |
| Community | Open users | Closed university group |
| Trip Model | On-demand / continuous service | Independent trip instances |
| Driver-Passenger Relation | Platform-mediated service | Peer-based, trip-by-trip agreement |

UniRide focuses on structured coordination within a defined academic ecosystem rather than open-market ride services.

---

## 5. Core Functionalities (MVP)

The initial version of the platform will include:

- User registration and authentication  
- Profile creation  
- Trip creation (origin, destination, date, time, available seats)  
- Trip search and filtering  
- Seat request workflow (request → approve/reject per trip)  
- Trip participation tracking  
- Route optimization algorithms  
- Real-time GPS tracking  
- Basic user rating system  

### Out of Scope

To keep the project feasible within the course timeline, the following features are excluded:

- Integrated payment systems  
- Automatic recurring bookings  
- Mobile native applications  

---

## 6. Target Users

- University students  
- Students who wish to share specific scheduled trips  

---

## 7. Technical Scope

The system will be implemented as:

- A web-based application  
- Client–server architecture  
- RESTful backend  
- Relational database  
- Role-based access control  

Each trip will be modeled as a distinct entity with its own lifecycle (created → requested → approved/rejected → completed).

