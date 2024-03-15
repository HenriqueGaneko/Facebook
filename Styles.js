import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#131e2e",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 80,
  },
  input: {
    width: "100%",
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    color: "#1f2124",
  },
  errorText: {
    color: "red",
    marginTop: 16,
    fontSize: 16,
  },
});

export default styles;
