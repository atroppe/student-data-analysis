import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import api from "../../api";
import { GradedCategories } from "../../../../shared/types";

interface GradedCategoriesSummaryProps {}

const GradedCategoriesSummary: React.FC<GradedCategoriesSummaryProps> = () => {
  const [data, setData] = useState<GradedCategories[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGradedCategories = async () => {
      try {
        const response = await api.get<GradedCategories[]>(
          "/graded-categories-summary"
        );
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch graded categories summary.");
      } finally {
        setLoading(false);
      }
    };

    fetchGradedCategories();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!data || data.length === 0) {
    return <Typography>No data available.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Graded Categories Summary
      </Typography>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "8px",
                borderBottom: "1px solid #ccc",
              }}
            >
              Category
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "8px",
                borderBottom: "1px solid #ccc",
              }}
            >
              Average Score
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((category) => (
            <tr key={category.key}>
              <td style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>
                {category.key}
              </td>
              <td style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>
                {category.averageScore?.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradedCategoriesSummary;
