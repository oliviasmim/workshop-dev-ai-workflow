def say_hello(name="World"):
    """
    A simple function that returns a greeting message.
    
    Args:
        name (str): The name to greet. Defaults to "World".
        
    Returns:
        str: The greeting message.
    """
    return f"Hello, {name}!"

if __name__ == "__main__":
    # Simple demonstration of the function
    print(say_hello())
    print(say_hello("Python"))
