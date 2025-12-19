# Contributing to Holistic Learning Ecosystem

Thank you for your interest in contributing to the Holistic Learning Ecosystem! We welcome contributions from the community.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## 🤝 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive experience for everyone. We expect all contributors to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

---

## 🚀 Getting Started

### Prerequisites

- **Python 3.9+** for backend development
- **Node.js 18+** for frontend and mobile development
- **Git** for version control
- **PostgreSQL** (optional, SQLite works for development)

### Setting Up Development Environment

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   git clone https://github.com/YOUR_USERNAME/eduecosystem.git
   cd eduecosystem
   ```

2. **Set up backend**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # Windows: venv\\Scripts\\activate
   pip install -r requirements.txt
   pip install -r requirements-dev.txt  # Development dependencies
   ```

3. **Set up frontend**
   ```bash
   cd frontend
   npm install
   ```

4. **Set up mobile** (optional)
   ```bash
   cd mobile
   npm install
   ```

5. **Configure environment**
   - Copy `.env.example` to `.env` in backend directory
   - Copy `.env.local.example` to `.env.local` in frontend directory
   - Update with your local configuration

6. **Run database migrations**
   ```bash
   cd backend
   alembic upgrade head
   ```

---

## 💻 How to Contribute

### Types of Contributions

We welcome:

- **Bug fixes** - Fix issues in the codebase
- **New features** - Add new functionality
- **Documentation** - Improve or add documentation
- **Tests** - Add or improve test coverage
- **Code refactoring** - Improve code quality
- **Performance improvements** - Optimize existing code

### Finding Issues to Work On

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Look for issues labeled:
   - `good first issue` - Great for newcomers
   - `help wanted` - We need help with these
   - `bug` - Something isn't working
   - `enhancement` - New feature or request

### Claiming an Issue

- Comment on the issue saying you'd like to work on it
- Wait for a maintainer to assign it to you
- Start working once assigned

---

## 🔄 Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

**Branch Naming Convention:**
- `feature/feature-name` - For new features
- `fix/bug-description` - For bug fixes
- `docs/what-changed` - For documentation
- `refactor/what-changed` - For refactoring
- `test/what-added` - For tests

### 2. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes

```bash
# Backend tests
cd backend
pytest tests/ -v

# Frontend tests (when available)
cd frontend
npm run test

# E2E tests
cd frontend
npx playwright test
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature description"
```

**Commit Message Convention:**

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**
```
feat: add email notification preferences
fix: resolve enrollment bug in course API
docs: update deployment guide
refactor: improve database query performance
test: add unit tests for authentication
```

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create Pull Request

- Go to the original repository on GitHub
- Click "New Pull Request"
- Select your fork and branch
- Fill in the PR template
- Submit for review

---

## 📝 Coding Standards

### Python (Backend)

- Follow [PEP 8](https://pep8.org/) style guide
- Use type hints where appropriate
- Maximum line length: 100 characters
- Use docstrings for functions and classes
- Use `black` for formatting
- Use `flake8` for linting

```bash
# Format code
black app/

# Lint code
flake8 app/
```

**Example:**
```python
from typing import List
from sqlalchemy.orm import Session

def get_courses(db: Session, skip: int = 0, limit: int = 100) -> List[Course]:
    """
    Retrieve a list of courses.
    
    Args:
        db: Database session
        skip: Number of records to skip
        limit: Maximum number of records to return
        
    Returns:
        List of Course objects
    """
    return db.query(Course).offset(skip).limit(limit).all()
```

### TypeScript (Frontend/Mobile)

- Use TypeScript strict mode
- Follow ESLint configuration
- Use meaningful variable names
- Maximum line length: 100 characters
- Use functional components with hooks
- Use proper TypeScript types

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

**Example:**
```typescript
interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: number) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll }) => {
  const handleEnroll = () => {
    onEnroll(course.id);
  };
  
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <button onClick={handleEnroll}>Enroll</button>
    </div>
  );
};
```

### General Guidelines

- **DRY (Don't Repeat Yourself)** - Avoid code duplication
- **SOLID Principles** - Follow object-oriented design principles
- **Meaningful Names** - Use descriptive variable and function names
- **Small Functions** - Keep functions focused and small
- **Comments** - Explain why, not what (code should be self-explanatory)

---

## 🧪 Testing

### Writing Tests

- All new features must include tests
- Aim for 80%+ code coverage
- Write both positive and negative test cases
- Use descriptive test names

### Backend Tests

```python
# tests/test_courses.py

def test_create_course_success(client, instructor_token):
    """Test successful course creation."""
    response = client.post(
        "/api/v1/courses/",
        json={"title": "Test Course", "description": "Test"},
        headers={"Authorization": f"Bearer {instructor_token}"}
    )
    assert response.status_code == 201
    assert response.json()["title"] == "Test Course"

def test_create_course_unauthorized(client):
    """Test course creation without authentication."""
    response = client.post(
        "/api/v1/courses/",
        json={"title": "Test Course", "description": "Test"}
    )
    assert response.status_code == 401
```

### Frontend Tests

```typescript
// CourseCard.test.tsx

describe('CourseCard', () => {
  it('should render course information', () => {
    const course = { id: 1, title: 'Test Course', description: 'Test' };
    render(<CourseCard course={course} onEnroll={() => {}} />);
    
    expect(screen.getByText('Test Course')).toBeInTheDocument();
  });
  
  it('should call onEnroll when button clicked', () => {
    const onEnroll = jest.fn();
    const course = { id: 1, title: 'Test Course', description: 'Test' };
    render(<CourseCard course={course} onEnroll={onEnroll} />);
    
    fireEvent.click(screen.getByText('Enroll'));
    expect(onEnroll).toHaveBeenCalledWith(1);
  });
});
```

### Running Tests

```bash
# Backend - all tests
cd backend
pytest tests/ -v

# Backend - specific test file
pytest tests/test_courses.py -v

# Backend - with coverage
pytest tests/ -v --cov=app --cov-report=html

# E2E tests
cd frontend
npx playwright test

# E2E tests - headed mode
npx playwright test --headed
```

---

## 🔍 Pull Request Process

### Before Submitting

- [ ] Code follows style guidelines
- [ ] Tests added/updated and passing
- [ ] Documentation updated
- [ ] Commits follow convention
- [ ] Branch is up to date with main

### PR Template

When creating a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Testing
- [ ] Backend tests passing
- [ ] E2E tests passing
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes
```

### Review Process

1. Automated checks run (tests, linting)
2. Maintainers review code
3. Address feedback if requested
4. Once approved, PR will be merged

### After Merge

- Delete your branch
- Pull latest changes from main
- Continue with next contribution!

---

## 🐛 Reporting Bugs

### Before Reporting

- Check if the bug has already been reported
- Verify you're using the latest version
- Test in different environments if possible

### Bug Report Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- OS: [e.g., Windows 10, macOS 12]
- Browser: [e.g., Chrome 100, Firefox 90]
- Version: [e.g., 1.0.0]

## Additional Context
Any other relevant information
```

---

## 💡 Suggesting Features

### Feature Request Template

```markdown
## Feature Description
Clear description of the proposed feature

## Problem It Solves
What problem does this feature address?

## Proposed Solution
How would this feature work?

## Alternatives Considered
What other solutions did you consider?

## Additional Context
mockups, examples, or research
```

---

## 📞 Questions?

- **Email:** support@eduecosystem.com
- **Discussions:** GitHub Discussions
- **Chat:** Discord/Slack (if available)

---

## 🏆 Recognition

Contributors will be recognized in:
- README.md Contributors section
- Release notes
- Project documentation

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

**Thank you for contributing to making online education better! 🎓**
